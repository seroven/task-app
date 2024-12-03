module.exports = {
	// Define los entornos en los que el código se ejecutará
	env: {
		browser: true, // Habilita las variables globales del navegador
		es2021: true,  // Soporte para las características de ECMAScript 2021
		node: true     // Habilita las variables globales de Node.js
	},
	// Extiende configuraciones y reglas predefinidas
	extends: [
		'eslint:recommended',          // Reglas recomendadas por ESLint
		'plugin:react/recommended',    // Reglas recomendadas para React
		'plugin:@typescript-eslint/recommended', // Reglas recomendadas para TypeScript
		'plugin:react-hooks/recommended', // Reglas para los hooks de React
		'plugin:jsx-a11y/recommended', // Reglas para accesibilidad en JSX
		'airbnb',                      // Configuración de estilo de Airbnb
		'airbnb-typescript',           // Extensión de Airbnb para TypeScript
		'prettier'                     // Desactiva reglas que podrían entrar en conflicto con Prettier
	],
	// Especifica el analizador para TypeScript
	parser: '@typescript-eslint/parser',
	// Opciones para el analizador
	parserOptions: {
		ecmaFeatures: {
			jsx: true // Habilita el análisis de JSX
		},
		ecmaVersion: 12,      // Versión de ECMAScript a utilizar
		sourceType: 'module', // Permite el uso de import/export
		project: './tsconfig.json' // Ruta al archivo de configuración de TypeScript
	},
	// Plugins adicionales que proporcionan reglas específicas
	plugins: [
		'react',               // Reglas específicas para React
		'@typescript-eslint',  // Reglas específicas para TypeScript
		'react-hooks',         // Reglas para los hooks de React
		'jsx-a11y',            // Reglas para accesibilidad en JSX
		'import',              // Ayuda a gestionar las importaciones de módulos
		'prettier'             // Integra Prettier para formateo de código
	],
	// Personaliza reglas específicas
	rules: {
		'prettier/prettier': 'error', // Muestra errores para problemas de formateo según Prettier
		'react/react-in-jsx-scope': 'off', // No requiere importar React en archivos JSX
		'@typescript-eslint/no-unused-vars': ['warn'], // Advierte sobre variables no utilizadas
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'ts': 'never',
				'tsx': 'never'
			}
		],
		'react/jsx-filename-extension': [
			'warn',
			{
				'extensions': ['.tsx'] // Permite JSX solo en archivos .tsx
			}
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				'devDependencies': true // Permite dependencias de desarrollo
			}
		],
		'import/no-unresolved': 'off' // Desactiva errores por módulos no resueltos
	},
	// Configuraciones adicionales
	settings: {
		react: {
			version: 'detect' // Detecta automáticamente la versión de React
		},
		'import/resolver': {
			'typescript': {} // Ayuda a resolver módulos de TypeScript
		}
	}
}
