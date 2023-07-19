// 1. retry. Note: Обратите внимание, что повторы выполняются немедленно
//    Example:
//      public post(url: string, body: any | null, options?: any): Observable<HttpEvent<T>> {
//        return this.http.post<T>(url, body, this.requestOptions(options)).pipe(
//          retry(2)
//         );
//      }

// 2. retryWhen. Note: Отложенная повторная попытка
//    Example:
//      maxRetry = 5;
//      delayMs = 500;
//      public post(url: string, body: any | null, options?: any): Observable<HttpEvent<T>> {
//        return this.http.post<T>(url, body, this.requestOptions(options)).pipe(
//          retryWhen((errors: Observable<any>) => errors.pipe(
//            delay(delayMs),
//            mergeMap(error => retries --> 0 ? of(error) : trowError(getErrorMesage(maxRetry)))
//          ))
//         );
//      }

// 3. Custom function.
//    Example:
//  const getErrorMesage = (maxRetry: number) => 'Tried to load Resource over XHR for ${maxRetry} times without success. Giving up.'
//  const maxRetry = 5;

//  export function delayRetry(delayMs = 500, maxRetry = 2) {
//    let retries = maxRetry;

//    return (src: Observable<any>) =>
//      src.pipe(
//        retryWhen((errors: Observable<any>) => errors.pipe(
//        delay(delayMs),
//        mergeMap(error => retries --> 0 ? of(error) : of(getErrorMesage(maxRetry)))
//      ))
//    );
//  }
