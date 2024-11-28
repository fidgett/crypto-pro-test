import { TagsTranslations } from './tags-translations';

export const SUBJECT_TAGS_TRANSLATIONS: TagsTranslations[] = [
  { possibleNames: ['UN', 'UnstructuredName'], translation: 'Неструктурированное имя' },
  { possibleNames: ['CN', 'commonName'], translation: 'Владелец' },
  { possibleNames: ['SN', 'surname'], translation: 'Фамилия' },
  { possibleNames: ['G', 'givenName', 'gn'], translation: 'Имя Отчество' },
  { possibleNames: ['C', 'countryName'], translation: 'Страна' },
  { possibleNames: ['S', 'ST', 'stateOrProvinceName'], translation: 'Регион' },
  { possibleNames: ['STREET', 'streetAddress'], translation: 'Адрес' },
  { possibleNames: ['O', 'organizationName'], translation: 'Компания' },
  { possibleNames: ['OU', 'organizationalUnitName'], translation: 'Отдел/подразделение' },
  { possibleNames: ['T', 'TITLE'], translation: 'Должность' },
  { possibleNames: ['ОГРН', 'OGRN'], translation: 'ОГРН' },
  { possibleNames: ['ОГРНИП', 'OGRNIP'], translation: 'ОГРНИП' },
  { possibleNames: ['СНИЛС', 'SNILS'], translation: 'СНИЛС' },
  { possibleNames: ['ИНН', 'ИННФЛ', 'ИНН ФЛ', 'INN', 'ИНН физического лица'], translation: 'ИНН' },
  { possibleNames: ['ИННЮЛ', 'ИНН ЮЛ', 'INN LE', 'INNLE', 'ИНН организации'], translation: 'ИНН организации' },
  { possibleNames: ['E', 'email', 'emailAddress', 'pkcs9email'], translation: 'Email' },
  { possibleNames: ['L', 'localityName'], translation: 'Город' },
];