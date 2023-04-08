// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Panel',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Movimientos',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Referenciales',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Compras',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Ventas',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Configuracion',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
