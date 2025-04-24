# Import libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, confusion_matrix

# Import dataset
df = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/penguins.csv')

# Delete sex variable
del df['sex']

# Drop missing rows
df.dropna(axis = 0, how = 'any', subset = None, inplace = True)

# Convert non-numeric data using one-hot encoding
df = pd.get_dummies(df, columns=['island'])

# Scale independent variables by dropping the dependent variable (sex)
scaler = StandardScaler()
scaler.fit(df.drop('species',axis=1))
scaled_df = scaler.transform(df.drop('species',axis=1))

# Assign X and y variables
X = scaled_df
y = df['species']

# Split data into test/train set (70/30 split) and shuffle
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, shuffle=True)

# Assign algorithm 
model = KNeighborsClassifier(n_neighbors=5)

# Fit algorithm to data
model.fit(X_train, y_train)

# Run algorithm on test data to make predictions
model_test = model.predict(X_test)

# Evaluate predictions
print(confusion_matrix(y_test, model_test))
print(classification_report(y_test, model_test))

# Data point to predict
penguin = [
	39, #bill_length_mm
	18.5, #bill_depth_mm
	180, #flipper_length_mm 
	3750, #body_mass_g
	0, #island_Biscoe    
	0, #island_Dream
	1, #island_Torgersen    
]

# Make prediction
new_penguin = model.predict([penguin])
new_penguin