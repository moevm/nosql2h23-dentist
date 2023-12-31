// Перечисление роутов
export enum AppRoutes {
  MAIN = "main",
  WELCOME = "welcome",
  // REGISTER = "register",
  LOGIN = "login",
  PATIENT = "patient",
  DOCTOR = "doctor",
  ADMIN = "admin"
  // FEED = "feed",
  // POST = "post",
  // NOT_FOUND = "notFound",
}

// Перечисление параметров предлагаю
// использовать чтобы не хардкодить шаблонную строку,
// а так же ссылаться на RoutePaths и c помощью
// метода replace менять на параметр сущности.
// Пример:
// RoutePaths.user.replace(RouteParams.USERNAME, username)

export const RoutePaths: Record<AppRoutes, string> = {
  // Будем отрисовывать профиль в зависимости от параметра.
  // Если на беке не найдётся юзер, то кинем на 404.
  [AppRoutes.MAIN]: "/",
  [AppRoutes.WELCOME]: '/' + AppRoutes.WELCOME,
  // [AppRoutes.REGISTER]: "/register",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.PATIENT]: "/patient",
  [AppRoutes.DOCTOR]: "/doctor",
  [AppRoutes.ADMIN]: "/admin"
  // [AppRoutes.FEED]: "/feed",
  // [AppRoutes.POST]: "/post/" + RouteParams.POST_ID,
  // [AppRoutes.NOT_FOUND]: "*",
};