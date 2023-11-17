import re
import sys

def replace_spaces(match):
    return match.group(1) + re.sub(' ', '-', match.group(2)) + ')'

def process_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()

    pattern = r'(\[.*?\]\()(.*?\))'
    result = re.sub(pattern, replace_spaces, content)

    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(result)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_file> <output_file>")
    else:
        input_file = sys.argv[1]
        output_file = sys.argv[2]
        process_file(input_file, output_file)
