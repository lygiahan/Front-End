import React, { useState } from 'react'

 function Loader() {
    const [loading, setLoading] = useState(false)

    return [
        loading ? <div className="fp-container">
          <img src="/img/loading.gif" className="fp-loader" />
        </div> : null,
        () => setLoading(true),
        () => setLoading(false)
      ]
}

export default Loader