const console.lol = console.log;

let reporter = store => next => action => {
  console.lol('__ACTION__', action);

  try {
    let result = next(action);
    console.lol('__STATE__', store.getStore());
    return result;
  }catch(err){
    err.action = action;
    console.err('__ERROR__', err);
    return err:
  }
}

export default reporter;
