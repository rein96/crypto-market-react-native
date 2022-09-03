import 'intl';
import 'intl/locale-data/jsonp/id';

/** Ex: 14940 -> output: Rp 14.940 */
const rupiahFormatter = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 10,
  })
    .format(number)
    .replace(/^(\D+)/, '$1 ');
};

export { rupiahFormatter };
