// // component
import SvgColor from '../../../components/svg-color';

// // ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Panel',
    path: '/menu/app',
    // icon: icon('ic_analytics'),
  },
  {
    title: 'Movimientos',
    path: '/menu/app',
    // icon: icon('ic_user'),
  },
  {
    title: 'Referenciales',
    path: '/menu/app',
    // icon: icon('ic_cart'),
    children: [
      {
        title: 'Ciudades',
        path: '/menu/ciudades', 
      },
      {
        title: 'Mercaderias',
        path: '/menu/mercaderias', 
      }
    ]
  },
  {
    title: 'Compras',
    path: '/menu/app',
    // icon: icon('ic_blog'),
    children: [
      {
        title: 'compras',
        path: '/menu/compras',
      },
      {
        title: 'Detalle Compras',
        path: '/menu/detalle-compras',
      },
      {
        title: 'Proveedores',
        path: '/menu/proveedores',
      }
    ]
  },
  {
    title: 'Ventas',
    path: '/menu/app',
    // icon: icon('ic_lock'),
    children: [
      {
        title: 'Ventas',
        path: '/menu/ventas',
      },
      {
        title: 'Apertura Y Cierre',
        path: '/menu/apertura',
      },
      {
        title: 'Nota De Credito',
        path: '/menu/nota-de-credito',
      },
    {
        title: 'Nota De Debito',
        path: '/menu/nota-de-debito',
    },
    {
        title: 'Arqueo de caja',
        path: '/menu/arqueo-de-caja',
    }
   ]
  },
  {
    title: 'Configuracion',
    path: '/404',
    // icon: icon('ic_disabled'),
  },
];

export default navConfig;
