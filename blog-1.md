## 1. any vs unknown

`any` is called a "type safety hole" because it disables TypeScript’s type checking. You can do anything with it, and errors may only appear at runtime.

`unknown` is safer because TypeScript forces you to check the type before using it. This process is called **type narrowing**.