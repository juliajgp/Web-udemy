# inverter string em python 

def inverter_string(s):
    string_invertida = ""
    for i in range(len(s) - 1, -1, -1):
        string_invertida += s[i]
    return string_invertida

# Entrada do usuário
string_original = input("Digite uma string para inverter: ")
string_invertida = inverter_string(string_original)

print(f"String invertida: {string_invertida}")
