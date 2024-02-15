import React from 'react'
import "./forgotpass.css"
import { Link } from 'react-router-dom'

function Forgotpass() {
  return (
    <>
    <form>
    <div className="mvl ptm uiInterstitial _9np_ uiInterstitialLarge uiBoxWhite">
      <div className="uiHeader uiHeaderBottomBorder mhl mts uiHeaderPage interstitialHeader">
        <div className="clearfix uiHeaderTop">
         <div>
              <h2 className="uiHeaderTitle" aria-hidden="true">Find Your Account</h2>
            </div>
          </div>
        </div>
        <div className="phl ptm uiInterstitialContent">
          <div className="identify_yourself_block">
            <table className="_9nq3">
              <tbody>
                <tr>
                  <td>
                  </td>
                  <td>
                    <div className="_9nq2 marginBottom16px">Please enter your email address to reset your account password.</div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <input type="text" className="inputtext _9o1w" id="identify_email" name="email" placeholder="Email address..." autofocus="1" aria-label="Email address" />
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="uiInterstitialBar uiBoxGray topborder">
          <div className="clearfix">
            <div className="rfloat _ohf">
              <Link className="_42ft _4jy0 _9nq1 textPadding20px _4jy3 _517h _51sy" to={'/login'}><span>Cancel</span></Link>
              <button value="1" className="_42ft _4jy0 _9nq0 textPadding20px _4jy3 _4jy1 selected _51sy" type="submit" name="did_submit" id="did_submit">Search</button>
            </div>
            <div className="pts"></div>
          </div>
        </div>
    </div>
    </form> 
    </>
  )
}

export default Forgotpass