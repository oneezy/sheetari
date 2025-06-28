## Bugs To Fix

### sheets by index:
- [ ] sheets by index still broke 
  - expectation:
    - http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/0 -> http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row
    - http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/1 -> http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row-nested
    - http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/2 -> http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col
    - http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/3 -> http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col-nested

### dot notation is not working for `mode=row` or `mode=col`:
#### row-nested (`mode=row` - default):
- current output:
```json
[
  {
    "id": "1",
    "user.name": "Alice",
    "user.email": "alice@email.com",
    "settings.theme": "dark",
    "settings.notifications.email": "TRUE"
  },
  {
    "id": "2",
    "user.name": "Bob",
    "user.email": "bob@email.com",
    "settings.theme": "light",
    "settings.notifications.email": "FALSE"
  }
]
```
- expected output:
```json
[
  {
    "id": "1",
    "user": {
      "name": "Alice",
      "email": "alice@email.com"
    },
    "settings": {
      "theme": "dark",
      "notifications": {
        "email": "true"
      }
    }
  },
  {
    "id": "2",
    "user": {
      "name": "Bob",
      "email": "bob@email.com"
    },
    "settings": {
      "theme": "light",
      "notifications": {
        "email": "false"
      }
    }
  }
]
```

#### col-nested (`mode=col`):
- current output:
```json
[
  {
    "user.name user.email settings.theme": "settings.notifications.email",
    "Alice alice@email.com dark": "TRUE"
  }
]

```
- expected output:
```json
{
  "user": {
    "name": "Alice",
    "email": "alice@email.com"
  },
  "settings": {
    "theme": "dark",
    "notifications": {
      "email": "true"
    }
  }
}
```
