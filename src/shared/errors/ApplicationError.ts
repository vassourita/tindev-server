class ApplicationError extends Error {
  public statusCode: number;

  constructor(message: string, status: number = 400) {
    super(message);
    this.message = message;
    this.name = 'ApplicationError';
    this.statusCode = status;
  }
}

export default ApplicationError;
