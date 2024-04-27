import customtkinter as tk
import tkinter as tk2
from tkinter import messagebox

tk.set_appearance_mode("dark")

root = tk.CTk()
root.geometry("1000x1200")
root.title("WSI")

def login():
    username = entry1.get()  # Pobierz zawartość pola "Username"
    password = entry2.get()  # Pobierz zawartość pola "Password"
    messagebox.showinfo("Login Details", f"Username: {username}\nPassword: {password}")  # Wyświetl dane w oknie dialogowym

frame = tk.CTkFrame(master=root)
frame.pack(pady=20, padx=60, fill="both", expand=True)

label = tk.CTkLabel(master=frame, text="Login", font=("Arial", 20))
label.pack(pady=20, padx=20)

entry1 = tk.CTkEntry(master=frame, placeholder_text="Username")
entry1.pack(pady=20, padx=20)

entry2 = tk.CTkEntry(master=frame, placeholder_text="Password", show="*")
entry2.pack(pady=20, padx=20)

button = tk.CTkButton(master=frame, text="Login", command=login)
button.pack(pady=20, padx=20)

root.mainloop()
