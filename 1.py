import pandas as pd

# Utwórz listę z nazwami miesięcy
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

# Utwórz pustą ramkę danych (tabelę) z nazwami miesięcy jako kolumnami
df = pd.DataFrame(columns=months)

while True:
    # Poproś użytkownika o nazwę miesiąca
    user_input = input("Wprowadź nazwę miesiąca (lub 'koniec' aby zakończyć): ")
    
    # Sprawdź czy użytkownik chce zakończyć wprowadzanie danych
    if user_input.lower() == 'koniec':
        break
    
    # Poproś użytkownika o dane do wprowadzenia w danym miesiącu
    data_input = input(f"Wprowadź dane dla miesiąca {user_input}: ")
    
    # Spróbuj przekonwertować dane do odpowiedniego formatu (np. int lub float)
    try:
        data_input = float(data_input)  # Zakładamy, że dane są liczbami zmiennoprzecinkowymi
    except ValueError:
        print("Wprowadź prawidłowe dane liczbowe.")
        continue
    
    # Spróbuj dodać wprowadzone dane do odpowiedniej kolumny
    try:
        df[user_input] = df[user_input].append(pd.Series([data_input]), ignore_index=True)
    except KeyError:
        print("Nieprawidłowa nazwa miesiąca.")
        continue

print("\nTwoja tabela:")
print(df)