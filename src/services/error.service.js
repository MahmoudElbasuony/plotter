export function handleError(err) {
  const error = getErrorMessage(err);
  alert(`an error occurred: ${error}`);
  console.log(error);
}

function getErrorMessage(error) {
  if (typeof error === "string") return error;
  else if (error instanceof Error) return error.message;
  else if (error instanceof Array) {
    return error.map(getErrorMessage).join(",");
  } else {
    return "Unknown error type";
  }
}
