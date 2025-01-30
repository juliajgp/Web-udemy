# faturamento mensal em python

# Definição dos faturamentos por estado
faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

# Cálculo do faturamento total
total = sum(faturamento.values())

# Exibição dos percentuais de cada estado
total = sum(faturamento.values())
print("Percentual de representação por estado:")
for estado, valor in faturamento.items():
    percentual = (valor / total) * 100
    print(f"{estado}: {percentual:.2f}%")

