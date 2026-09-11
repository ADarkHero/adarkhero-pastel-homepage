import os

# Path to js files
folder_path = r"C:\xampp\htdocs\adarkhero-pastel-homepage\js"

# Name of the combined js file
file_name = "main.js"
output = os.path.join(folder_path, file_name)

with open(output, "w", encoding="utf-8") as outfile:
    outfile.write(f"// Created with js_combine.py by ADarkHero.")
    outfile.write("\n")
    outfile.write("\n")
    
    for file in sorted(os.listdir(folder_path)):
        file_path = os.path.join(folder_path, file)

        # Process only other files
        if (
            os.path.isfile(file_path)
            and file.endswith(".js")
            and file != file_name
        ):
            print(f"Processing: {file}")

            with open(file_path, "r", encoding="utf-8") as infile:
                outfile.write(f"\n/* ========================== \n {file}\n========================== */\n\n")
                outfile.write(infile.read())
                outfile.write("\n")

print(f"Success: {output}")