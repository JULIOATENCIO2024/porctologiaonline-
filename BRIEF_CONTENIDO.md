# Brief de redacción — proctologiaonline.com

Lee primero `BUILD_proctologiaonline.md` (secciones 0, 3, 4, 5, 7 y 8) y `src/data/types.ts` (forma exacta de los datos)
y `src/data/site.ts` (médicos y precio). No toques otros archivos que no sean los que se te asignan.

## Qué es
Teleconsulta de 30 minutos por videollamada con proctólogos de la Clínica Proctológica de Lima (San Isidro, Perú),
USD 50, pago con link antes de la cita, informe escrito con plan al terminar; si hace falta examen o cirugía, se coordina
en Lima o se indica qué pedir al médico local. Reembolso si la teleconsulta no se realiza.

## Reglas obligatorias (BUILD §8)
1. No prometer resultados ni diagnóstico sin examen. Usa la idea: «En la videollamada el proctólogo revisa tus síntomas,
   te orienta y arma un plan. Si necesita examinarte, te explica dónde y cómo».
2. NO ofrecer recetas en línea. La receta solo se menciona como «según la normativa de tu país». NO nombres fármacos
   ni principios activos (ni lidocaína, nifedipino, diltiazem, toxina botulínica, etc.). Habla de «tratamiento médico»,
   «medidas de higiene y dieta», «procedimientos en consultorio», «cirugía».
3. Prohibido: «rápido», «inmediato», «sin dolor», «cura definitiva», «100 %», «gratis», «garantizado», «el mejor»
   (y sus equivalentes en inglés y francés: fast, quick, instant, painless, cure, guaranteed, free, best; rapide,
   immédiat, sans douleur, guérison définitive, gratuit, garanti, meilleur).
4. Nada de fotos clínicas ni antes/después (no aplica al texto, pero no las sugieras).
5. Médicos con nombre, CMP y RNE (la plantilla los pinta desde site.ts; tú no inventes números).
6. Inglés de EE. UU. y francés neutro con «vous», NATIVOS, no traducción literal. Español neutro latinoamericano con «tú».
7. Teleconsulta brindada desde Lima por médicos colegiados en el Colegio Médico del Perú, conforme a la Ley N.° 30421
   (Ley Marco de Telesalud). No reemplaza urgencias.

## Matiz legal por mercado (importante)
- **Inglés (EE. UU./Canadá):** los médicos NO tienen licencia en EE. UU./Canadá. El servicio se presenta como
  **second opinion and medical guidance from Peru** y como puerta para **viajar a Lima a tratarse**. Nunca decir
  «we treat you in the US», ni «prescription», ni «diagnosis online». Usar «review your symptoms and records»,
  «written plan you can share with your local doctor». Atiende solo la Dr. Milagros Quinto.
- **Francés:** mercado principal África francófona (Senegal, Côte d'Ivoire, Cameroun, Maroc), Haití; Quebec solo como
  «deuxième avis». Atiende la Dre Andrea (sin apellido confirmado: escribe «Dre Andrea»). Usa «vous».
- **Español:** México, Colombia, Ecuador, Bolivia, Chile, Centroamérica, provincias del Perú, hispanos en EE. UU. y España.

## SEO (BUILD §5)
Nadie busca «proctólogo en línea»: se busca la enfermedad. Títulos y H1 con la enfermedad; lo «online/por
videollamada» es la respuesta. Palabras: hemorroides externas, hemorroides tratamiento, proctólogo, coloproctólogo,
fisura anal, fístula anal, condilomas anales; EN: hemorrhoid treatment, anal fissure treatment, colorectal surgeon,
hemorrhoid doctor; FR: proctologue, fissure anale, fistule anale, hémorroïdes traitement.
title ≤ 60 caracteres; description 140–160 caracteres.

## Slugs (sin barras)
Enfermedades:
| key | es | en | fr |
|---|---|---|---|
| hemorroides | hemorroides | hemorrhoids | hemorroides |
| fisura | fisura-anal | anal-fissure | fissure-anale |
| fistula | fistula-anal | anal-fistula | fistule-anale |
| condilomas | condilomas | anal-warts | condylomes |
| sangrado | sangrado-anal | rectal-bleeding | saignement-anal |
| picazon | picazon-anal | anal-itching | demangeaisons-anales |
| estrenimiento | estrenimiento-cronico | chronic-constipation | constipation-chronique |

Páginas generales:
| key | es | en | fr |
|---|---|---|---|
| home | (vacío '') | '' | '' |
| how | como-funciona | how-it-works | comment-ca-marche |
| price | precio | price | tarif |
| team | equipo | dr-milagros-quinto | dre-andrea |
| secondOpinion | segunda-opinion | second-opinion | deuxieme-avis |
| treatmentLima | tratamiento-en-lima | treatment-in-lima | traitement-a-lima |
| faq | preguntas | faq | faq |
| contact | contacto | contact | contact |
| terms | legal/terminos | legal/terms | legal/conditions |
| privacy | legal/privacidad | legal/privacy | legal/confidentialite |
| consent | legal/consentimiento-telemedicina | legal/telemedicine-consent | legal/consentement-telemedecine |

Landings (slugG / slugM / slugT):
| key | es | en | fr |
|---|---|---|---|
| proctologo | proctologo | colorectal-specialist | proctologue |
| hemorroides | hemorroides | hemorrhoids | hemorroides |
| fisura | fisura | anal-fissure | fissure-anale |
| fistula | fistula | anal-fistula | fistule-anale |
| condilomas | condilomas | anal-warts | condylomes |
| segunda-opinion | segunda-opinion | second-opinion | deuxieme-avis |
En los 3 idiomas slugG = slugM = slugT = ese valor, salvo condilomas: slugT = '' (sin TikTok).

## Formato de los archivos
TypeScript, `import type { … } from '../../data/types';`, export con nombre, texto plano (se permite `<strong>` y
enlaces internos `<a href="/ruta/">` a páginas del mismo idioma con barra final; EN con prefijo /en/, FR con /fr/).
Usa comillas simples o plantillas; cuida escapar apóstrofos (en francés usa la comilla tipográfica ’ dentro de cadenas
con comilla simple, o usa comillas dobles). Fechas, precios y nombres de médicos: no los escribas en el texto salvo
«USD 50» y «30 minutos»; la plantilla pone el resto. Al terminar, ejecuta
`npx tsc --noEmit --skipLibCheck --strict false src/content/<lang>/<archivo>.ts` o al menos
`node --experimental-strip-types -e "import('./src/content/<lang>/<archivo>.ts')"` para confirmar que compila,
y cuenta palabras por página de enfermedad (whatIs + signs + online + urgent + sections + faqs) apuntando a 900–1 400.
