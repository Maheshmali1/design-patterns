# Design Patterns in TypeScript

Welcome to the Design Patterns in TypeScript repository! This project is designed to help you learn and practice various design patterns using TypeScript. Each design pattern is implemented with examples to demonstrate its usage and benefits.

## Repository Overview

### Design Patterns Included:

1. **Abstract Factory Pattern**

   - **Description:** The Abstract Factory Pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It allows a client to create objects without specifying their concrete classes, relying on a set of related factories to produce the objects.
   - **Location:** [abstract-factory-pattern](./src/abstract-factory-pattern/)

2. **Prototype Pattern**
   - **Description:** The Prototype Pattern is a creational design pattern that focuses on efficiently creating objects by cloning an existing instance, known as the prototype. Instead of creating new objects through traditional instantiation, the Prototype Pattern allows for the duplication of existing objects, serving as a blueprint for new instances. This pattern is especially useful when the cost of creating a new instance is more expensive than copying an existing one.
   - **Location:** [prototype-pattern](./src/prototype-pattern/)
3. **Singleton Pattern**

   - **Description:** The Singleton Pattern is a design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is part of the creational design patterns and is often used when a single point of control or coordination is desirable.
   - **Location:** [singleton-pattern](./src/singleton-pattern/)

4. **Strategy Pattern**

   - **Description:** The Strategy Pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. It allows a client to choose an appropriate algorithm from a set of options at runtime. The key idea behind the Strategy Pattern is to define a family of algorithms, encapsulate each one, and make them interchangeable without altering the client code.
   - **Location:** [strategy-pattern](./src/strategy-pattern/)

5. **Observer Pattern**
   - **Description:** The Observer Pattern is a behavioral design pattern where an object, known as the subject, maintains a list of its dependents, called observers, that are notified of any state changes. When the state of the subject changes, all registered observers are automatically notified and updated.
   - **Location:** [observer-pattern](./src/observer-pattern/)

## How to Use the Repository

To run the Design-Patterns repository locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Maheshmali1/design-patterns
```

2. Navigate to the project directory:

```bash
cd design-patterns
```

3. Install the dependencies:

```bash
npm install
```

4. Start Client file for design pattern using :

```bash
npm run ${design-pattern-name}

e.g. npm run abstract-factory
```

## Author

The Design-Patterns is developed and maintained by [Mahesh Mali](https://github.com/Maheshmali1)

## Acknowledgements

We would like to express our gratitude to the open-source community for providing the tools and frameworks that made this project possible. We also extend our thanks to the contributors and users who have helped improve the system through feedback and suggestions.
