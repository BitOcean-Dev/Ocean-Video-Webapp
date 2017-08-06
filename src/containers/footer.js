import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const Footer = () =>
<footer className="footer">
  <div className="container">
     <div className="row-fluid">
      <div className="span6"> <p className="copyright"><img className="foot-logo" src="img/logo-ts.png" alt="Brand Logo" /> &copy; 2017 <strong>Oceancast</strong></p></div>
      <div className="span6">
      <div className="pagination pull-right">
      <ul>
      <li><a data-rel="tooltip" data-placement="top" data-original-title="Follow us on Twitter" href="#"><i className="icon-twitter"></i></a></li>
      <li><a data-rel="tooltip" data-placement="top" data-original-title="Share us on Pinterest" href="#"><i className="icon-pinterest"></i></a></li>
      <li><a data-rel="tooltip" data-placement="top" data-original-title="Like us on Facebook" href="#"><i className="icon-facebook"></i></a></li>
      <li><a data-rel="tooltip" data-placement="top" data-original-title="+1 us on Google+" href="#"><i className="icon-google-plus"></i></a></li>
      </ul>
    </div>
    </div>
    </div>
    </div>
</footer>

export default Footer;
