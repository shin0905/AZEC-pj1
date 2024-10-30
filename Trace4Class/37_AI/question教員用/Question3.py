import tkinter as tk
from tkinter import messagebox


# Function to update
def buttonclick(msg):
    # Create a program to convert msg here
    # Question 3: Convert all characters to uppercase

    # Edit Here! #######

    label.config(text=msg)

# Create the main
root = tk.Tk()
root.title("Simple Github Copilot")

# Set window size
window_width = 400
window_height = 300
root.geometry(f"{window_width}x{window_height}")

# Center the window
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
position_top = int(screen_height / 2 - window_height / 2)
position_right = int(screen_width / 2 - window_width / 2)
root.geometry(f"{window_width}x{window_height}+{position_right}+{position_top}")

# Create the text
entry = tk.Entry(root)
entry.pack(pady=10)

# Create the button
button = tk.Button(root, text="Execute")

# Function to handle
def on_button_click():
    # Get the message
    msg = entry.get()
    # Update the label
    buttonclick(msg)

# Set the button click
button.config(command=on_button_click)

# Create the label
label = tk.Label(root, text="Answer here")
label.pack(pady=10)

# Pack the button
button.pack(pady=20)

# Start the main loop
root.mainloop()