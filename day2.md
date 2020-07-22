# Race condition

# Locks API

# Memory Leak

# Garbage Collection
 - Scavange (clearing young objects)
 - Mark-sweep (clearing all)

# Layers
  * front:
    - ui layer
    - business logic layer
    - data layer
    - network layer
  * back
    - business logic layer
    - network layer
    - data layer
    - system layer

## Three types of interaction
- Through data (hard linking, bad to have)
- Through Interfaces
- Through events (loose, best to have)

# GRASP
General Responsibility Assignment Software Patterns

Craig Larman - https://www.amazon.com/Applying-UML-Patterns-Introduction-Object-Oriented/dp/0131489062

## Data structures matters

## OOP
- Association (bad) [when setting through property]
- Aggregation (most universal) [through constructor]
- Composition (best isolation) [internally]

## GRASP: Cohesion & Coupling
- Cohesion - internal module linking or component's
- Coupling - linking between modules

Try to reach `Low Coupling` and `High Cohesion`

- Information Expert and Creator

- Controller (also Front Controller) - single entry

- Pure Fabrication

Do not leak system stuff into application layer

- Indirection

Don't go deep, use instances owner

- Protected Variations

Small interfaces, minimum inheritence

# SOLID
Michael Feathers
Robert Margin (Uncle Bob)

- Single Responsibility
- Open Closed principle
- Liskov Substitution (fe: Generics)

Any children interface should be handled properly by the functionality which supports it's parent

- Interface Segregation

Keep interfaces as small as they could be

- Dependency Inversion

Do not rely (use) module's internal stuff. Use interfaces (methods)

V8 optimisations works only when input interface has >= 4 forms (shapes)

Try to keep your input parameters monomorphic (shapes and args ordering always the same)

`Object.getPrototypeOf`

# Gang of Four
Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
## Design Patterns - Elements of Reusable Object-Oriented Software (23 patterns)

- Creational
- Structural
- Behavioral
- Communicational

Use them in js if code is too ugly and unorganized

use Pool when there are some limited resources to controll access (db connection pool or third party calls limiter)

# Security
scrypt
argon

`use Salt!`
