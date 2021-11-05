ENTRY="src/components"
OUTPUT="src/index.ts"
PATH_REPLACE_SUBSTR="src\/"
PATH_REPLACE_PATTERN=".\/"

> ${OUTPUT}

for path in ${ENTRY}/* ; do
    if [ -d $path ]; then
        echo "export * from '$path';" | sed "s/${PATH_REPLACE_SUBSTR}/${PATH_REPLACE_PATTERN}/" >> ${OUTPUT}
    fi
done

# Start building process
yarn rollup -c
