const routeFeature = ['homepage', 'newAgenda', 'myAgendas', 'allAgendas'] as const;
const routesUrl = ['/', '/new-agenda', '/my-agendas', '/all-agendas'] as const;

type RouteFeature = (typeof routeFeature)[number];
export type RoutesUrl = (typeof routesUrl)[number];

type Getters<T extends string, K> = {
  // eslint-disable-next-line no-unused-vars
  [k in T]: K;
};

type RoutesData = Getters<RouteFeature, RoutesUrl>;

const routes: RoutesData = {
  homepage: '/',
  newAgenda: '/new-agenda',
  myAgendas: '/my-agendas',
  allAgendas: '/all-agendas',
};

export default routes;