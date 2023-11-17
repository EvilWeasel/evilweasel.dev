#!/bin/bash

cd ~/source/evilweasel.dev/src/content/docs/guides/PowerShell

# Rename the main directory
mv "Powershell - Deutsch cc3ff226d8144c58a738ad7c3a947b8c" "Powershell"

# Rename subdirectories and files, replace spaces with hyphens
find Powershell -depth -name '* *' | while IFS= read -r file ; do
    mv -- "$file" "$(dirname -- "$file")/$(basename -- "$file"| tr ' ' '-')"
done

# Update filenames to remove the UUID
find Powershell -type f -name "*.md" | while read file; do
    new_file=$(echo "$file" | sed -E 's/-[0-9a-f]{32}\.md/.md/')
    if [[ "$file" != "$new_file" ]]; then
        mv -- "$file" "$new_file"
    fi
done

# Update links inside Markdown files
find Powershell -type f -name "*.md" | while read file; do
    sed -i -E 's/(\[[^]]*\]\([^)]*)-[0-9a-f]{32}(\.md\))/\1\2/g' "$file"
    sed -i 's/ /-/g' "$file"
done

