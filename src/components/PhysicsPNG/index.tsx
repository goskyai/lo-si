import { Bodies, Body, Engine, Render, Runner, World } from 'matter-js';
import { FunctionComponent, useEffect, useRef } from 'react';

export interface PhysicsPNGProps {
  /**
   * 畫布寬度。
   */
  canvasWidth?: number;
  /**
   * 畫布高度。
   */
  canvasHeight?: number;
  /**
   * 圓形圖檔們。
   */
  circle?: string[];
  /**
   * 生成物體的大小比例範圍。
   *
   * `[1, 2]` 表示生成之物體會介於原大小 1 ~ 2 倍之間。
   */
  scaleRange?: number[];
  /**
   * 每個物體落下的時間差距 (ms)。
   */
  dropDelay?: number;
  /**
   * 物體是否要以隨機角度初始化。
   */
  isRandomAngle?: boolean;
  /**
   * 物體摩擦力。
   *
   * `0` 代表物體會像溜冰一樣不斷滑動。
   *
   * `1` 代表對物體施加力量後，物體幾乎會失去動力。
   */
  friction?: number;
  /**
   * 空氣摩擦力。
   *
   * 數值若越高，則物體在空氣中的阻力越大，位移速度上限將會越低、物體的彈力也會更不明顯。
   */
  frictionAir?: number;
  /**
   * 物體彈力。
   *
   * `0` 表示物體之間碰撞完全無彈性、無反彈。
   *
   * `0.8` 表示會以本身動能的 80% 反彈。
   */
  restitution?: number;
}

export const PhysicsPNG: FunctionComponent<PhysicsPNGProps> = ({
  canvasWidth = 800,
  canvasHeight = 600,
  circle = [],
  scaleRange = [1],
  dropDelay = 2000,
  isRandomAngle = false,
  friction = 0.1,
  frictionAir = 0.01,
  restitution = 0,
}) => {
  const engine = useRef(Engine.create());
  const render = useRef<Render | null>(null);
  const scene = useRef<HTMLCanvasElement | null>(null);
  const dropInterval = useRef<number | null>(null);

  const wallPosition = {
    t: { x: canvasWidth / 2, y: -100 },
    r: { x: canvasWidth + 6, y: canvasHeight / 2 },
    b: { x: canvasWidth / 2, y: canvasHeight + 6 },
    l: { x: -6, y: canvasHeight / 2 },
  };
  const wall = useRef({
    t: Bodies.rectangle(wallPosition.t.x, wallPosition.t.y, 9999, 10, {
      isStatic: true,
    }),
    r: Bodies.rectangle(wallPosition.r.x, wallPosition.r.y, 10, 9999, {
      isStatic: true,
    }),
    b: Bodies.rectangle(wallPosition.b.x, wallPosition.b.y, 9999, 10, {
      isStatic: true,
    }),
    l: Bodies.rectangle(wallPosition.l.x, wallPosition.l.y, 10, 9999, {
      isStatic: true,
    }),
  });

  const createCanvas = () => {
    render.current = Render.create({
      canvas: scene.current || undefined,
      engine: engine.current,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: 'rgba(0, 0, 0, 0)',
      },
    });
    World.add(engine.current.world, [
      wall.current.t,
      wall.current.r,
      wall.current.b,
      wall.current.l,
    ]);
    Runner.run(engine.current);
    Render.run(render.current);
  };

  const removeCanvas = () => {
    if (render.current) {
      Render.stop(render.current);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.current.canvas.remove();
    }
  };

  const dropRandomItem = () => {
    if (circle.length > 0) {
      const imageSource = circle[Math.floor(Math.random() * circle.length)];
      const image = new Image();
      image.onload = () => {
        const scaleMax = Math.max(...scaleRange);
        const scaleMin = Math.min(...scaleRange);
        const scale = Math.random() * (scaleMax - scaleMin) + scaleMin;
        const item = Bodies.circle(
          Math.random() * canvasWidth,
          -50,
          (Math.max(image.width, image.height) / 2) * scale,
          {
            friction,
            frictionAir,
            restitution,
            render: {
              sprite: {
                xScale: scale,
                yScale: scale,
                texture: imageSource,
              },
            },
          },
        );
        isRandomAngle && Body.rotate(item, Math.floor(Math.random() * 5));
        World.add(engine.current.world, item);
      };
      image.src = imageSource;
    }
  };

  const intervalDropItems = () => {
    window.clearInterval(dropInterval.current || 0);
    dropInterval.current = window.setInterval(() => {
      dropRandomItem();
    }, dropDelay);
  };

  useEffect(() => {
    createCanvas();
    return () => {
      window.clearInterval(dropInterval.current || 0);
      removeCanvas();
    };
  }, []);

  useEffect(() => {
    Body.setPosition(wall.current.t, wallPosition.t);
    Body.setPosition(wall.current.r, wallPosition.r);
    Body.setPosition(wall.current.b, wallPosition.b);
    Body.setPosition(wall.current.l, wallPosition.l);
    intervalDropItems();
  }, [canvasWidth, canvasHeight]);

  return <canvas ref={scene} width={canvasWidth} height={canvasHeight} />;
};
