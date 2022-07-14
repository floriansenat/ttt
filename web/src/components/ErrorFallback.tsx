export function ErrorFallback() {
  return (
    <div role="alert">
      <h2>Oops une erreur est survenue</h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Recharger la page
      </button>
    </div>
  );
}
