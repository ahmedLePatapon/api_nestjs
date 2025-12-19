# Projet NestJS - API REST

Application NestJS avec authentification JWT et gestion des utilisateurs.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env
```

### Lancement de l'application

```bash
# Mode développement
npm run start:dev

# Mode production
npm run build
npm run start:prod
```

L'API sera accessible sur `http://localhost:3000`

## 📁 Structure du projet

```
src/
├── modules/
│   ├── users/          # Gestion des utilisateurs
│   └── auth/           # Authentification JWT
├── common/             # Code réutilisable
│   └── filters/        # Filtres d'exception
├── app.module.ts       # Module principal
└── main.ts            # Point d'entrée
```

## 🔑 Endpoints API

### Authentification
- `POST /api/auth/login` - Connexion utilisateur
- `GET /api/auth/profile` - Profil utilisateur (protégé)

### Utilisateurs
- `GET /api/users` - Liste des utilisateurs
- `GET /api/users/:id` - Détails d'un utilisateur
- `POST /api/users` - Créer un utilisateur
- `PATCH /api/users/:id` - Modifier un utilisateur
- `DELETE /api/users/:id` - Supprimer un utilisateur

### Health Check
- `GET /api/health` - Vérifier l'état de l'API

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Couverture de code
npm run test:cov
```

## 📝 Exemple d'utilisation

### Créer un utilisateur
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "password": "password123"
  }'
```

### Se connecter
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password"
  }'
```

### Accéder au profil (avec token)
```bash
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🛠️ Technologies utilisées

- NestJS - Framework Node.js
- TypeScript - Langage de programmation
- JWT - Authentification
- Passport - Middleware d'authentification
- class-validator - Validation des données

## 📚 Prochaines étapes

Pour améliorer ce projet :
- Ajouter une base de données (PostgreSQL, MongoDB)
- Implémenter le hashing des mots de passe (bcrypt)
- Ajouter des tests unitaires et e2e
- Mettre en place des rôles et permissions
- Ajouter la documentation Swagger
- Implémenter la pagination

## 📄 Licence

MIT