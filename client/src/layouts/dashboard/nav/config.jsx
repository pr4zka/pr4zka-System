// // component
import SvgColor from '../../../components/svg-color';

// // ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Panel',
    path: '/menu/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Movimientos',
    path: '/menu/compras',
    icon: icon('ic_user'),
  },
  {
    title: 'New Compras',
    path: '/menu/new/compras',
  },
  {
    title: 'Referenciales',
    path: '/menu/ciudades',
    icon: icon('ic_cart'),
    children: [
      {
        title: 'Ciudades',
        path: '/menu/ciudades', 
      }
    ]
  },
  {
    title: 'Compras',
    path: '/menu/blog',
    icon: icon('ic_blog'),
    children: [
      {
        title: 'compras',
        path: '/menu/compras',
      },
      {
        title: 'Detalle Compras',
        path: '/menu/detalle-compras',
      }
    ]
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
