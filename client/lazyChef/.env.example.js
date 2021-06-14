const _Environments = {
    ENDPOINTS:  {
        REACT_APP_PORT=port
    }
  
}

function getEnvironment() {
    return _Environments
}

export const env = getEnvironment()