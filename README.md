from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import classification_report

# Step 1: Load Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Step 2: Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 3: Preprocess data (scaling features)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Step 4: Choose a model (SVM)
model = SVC(kernel='rbf', C=1.0, gamma='scale', random_state=42)

# Step 5: Train the model
model.fit(X_train_scaled, y_train)

# Step 6: Evaluate the model
y_pred = model.predict(X_test_scaled)
print(classification_report(y_test, y_pred))
