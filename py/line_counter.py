#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from pathlib import Path
import sys

# Zu berücksichtigende Dateiendungen
EXTENSIONS = {".html", ".js", ".css"}


def count_lines(file_path):
    """Counts lines of file."""
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            return sum(1 for _ in f)
    except Exception as e:
        print(f"Fehler beim Lesen von {file_path}: {e}")
        return 0


def scan_directory(root_path):
    total_lines = 0
    results = []

    for file in Path(root_path).rglob("*"):
        if file.is_file() and file.suffix.lower() in EXTENSIONS:
            lines = count_lines(file)
            total_lines += lines
            results.append((file, lines))

    return results, total_lines


def main():
    if len(sys.argv) < 2:
        path = input("Input path to count: ").strip()
    else:
        path = sys.argv[1]

    if not Path(path).is_dir():
        print(f"Ungültiges Verzeichnis: {path}")
        sys.exit(1)

    results, total_lines = scan_directory(path)

    print("\nFiles and linecount:")
    print("-" * 80)

    for file, lines in sorted(results):
        print(f"{lines:>8}  {file}")

    print("-" * 80)
    print(f"Number of files: {len(results)}")
    print(f"Number of lines:   {total_lines}")
    input();


if __name__ == "__main__":
    main()