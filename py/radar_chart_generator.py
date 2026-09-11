import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# ========================================
# Konfiguration
# ========================================

CSV_FILE = "charts.csv"
OUTPUT_DIR = "charts"

MAX_VALUE = 150

RED_LIMIT = 80
YELLOW_LIMIT = 120

os.makedirs(OUTPUT_DIR, exist_ok=True)

# ========================================
# CSV laden
# ========================================

df = pd.read_csv(CSV_FILE)

name_column = df.columns[0]
categories = list(df.columns[1:])

num_vars = len(categories)

# Winkel berechnen
angles = np.linspace(
    0,
    2 * np.pi,
    num_vars,
    endpoint=False
).tolist()

angles += angles[:1]

# ========================================
# Für jede Datenzeile ein Radar Chart
# ========================================

for _, row in df.iterrows():

    name = row[name_column]

    values = row[categories].astype(float).tolist()
    values += values[:1]

    values_np = np.array(values)

    # ------------------------------------
    # Radar vorbereiten
    # ------------------------------------

    fig, ax = plt.subplots(
        figsize=(8, 8),
        subplot_kw={"polar": True}
    )

    ax.set_theta_offset(0)
    ax.set_theta_direction(1)

    ax.set_ylim(0, MAX_VALUE)

    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories, fontsize=13)

    ax.set_yticks([40, 80, 120, 150])
    ax.set_yticklabels(
        ["40", "80", "120", "150"],
        fontsize=10
    )

    ax.grid(True, alpha=0.6)

    # ====================================
    # ROTE STUFE (0-80)
    # ====================================

    red_layer = np.minimum(
        values_np,
        RED_LIMIT
    )

    ax.fill(
        angles,
        red_layer,
        color="#e74c3c",
        alpha=0.55,
        zorder=1
    )

    # ====================================
    # GELBE STUFE (80-120)
    # ====================================

    yellow_layer = np.clip(
        values_np,
        RED_LIMIT,
        YELLOW_LIMIT
    )

    ax.fill(
        angles,
        yellow_layer,
        color="#f1c40f",
        alpha=0.55,
        zorder=2
    )

    ax.fill(
        angles,
        red_layer,
        color="white",
        alpha=1.0,
        zorder=3
    )

    # ====================================
    # GRÜNE STUFE (120-150)
    # ====================================

    green_layer = np.clip(
        values_np,
        YELLOW_LIMIT,
        MAX_VALUE
    )

    ax.fill(
        angles,
        green_layer,
        color="#2ecc71",
        alpha=0.55,
        zorder=4
    )

    ax.fill(
        angles,
        yellow_layer,
        color="white",
        alpha=1.0,
        zorder=5
    )

    # ====================================
    # Endpolygon
    # ====================================

    ax.fill(
        angles,
        values,
        color="none",
        zorder=6
    )

    ax.plot(
        angles,
        values,
        color="black",
        linewidth=3,
        zorder=7
    )

    plt.title(
        name,
        fontsize=22,
        pad=30
    )

    plt.tight_layout()

    plt.savefig(
        os.path.join(
            OUTPUT_DIR,
            f"{name}.png"
        ),
        dpi=300,
        bbox_inches="tight"
    )

    plt.close()

print("Alle Charts erzeugt.")