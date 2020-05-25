export interface DocumentationSpec {
  service: string;
  apiUrl: string;
  kdocUrl: string;
}

export const documentationSpec: DocumentationSpec[] = [
  {
    service: 'comment-service',
    apiUrl: '/assets/api/comment-service-openapi-spec.yaml',
    kdocUrl: '/assets/kdoc/comment-service/index.html'
  },
  {
    service: 'graph-service',
    apiUrl: '/assets/api/graph-service-openapi-spec.yaml',
    kdocUrl: '/assets/kdoc/graph-service/index.html'
  },
  {
    service: 'task-service',
    apiUrl: '/assets/api/task-service-openapi-spec.yaml',
    kdocUrl: '/assets/kdoc/task-service/index.html'
  },
  {
    service: 'user-service',
    apiUrl: '/assets/api/user-service-openapi-spec.yaml',
    kdocUrl: '/assets/kdoc/user-service/index.html'
  },
  {
    service: 'commons-lib',
    apiUrl: null,
    kdocUrl: '/assets/kdoc/commons-lib/index.html'
  },
];
