import React from "react"
import $, { ready } from "jquery";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
$(document).ready(function () {
	$(".header").hover(function () {
		$(".subBanner").stop().slideDown();
			
		}, function () {
			$(".subBanner").stop().slideUp();
		}
	);
});

function Header() {
	return (
    <header className="header">
      <div className="inner">
        <div className="row1">
          <ul>
            <li>
              <a href="">login</a>
            </li>
            <li>
              <a href="">join</a>
            </li>
            <li>
              <a href="">basket</a>
            </li>
            <li>
              <a href="">mypage</a>
            </li>
          </ul>
        </div>
        <div className="row2">
          <div className="logo">
            <Link to="/">
              <img src="/img/logo.svg"></img>
            </Link>
          </div>
          <ul className="nav">
            <li>
              <a href="#">menu1</a>
            </li>
            <li>
              <a href="#">menu2</a>
            </li>
            <li>
              <a href="#">menu3</a>
            </li>
            <li>
              <a href="#">menu4</a>
            </li>
            <li>
              <a href="#">menu5</a>
            </li>

            <div className="subBanner">
              <ul>
                <li>
                  <a href="#">submenu1</a>
                </li>
                <li>
                  <a href="#">submenu2</a>
                </li>
                <li>
                  <a href="#">submenu3</a>
                </li>
                <li>
                  <a href="#">submenu4</a>
                </li>
                <li>
                  <a href="#">submenu5</a>
                </li>
                <li>
                  <a href="#">submenu6</a>
                </li>
                <li>
                  <a href="#">submenu7</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">submenu1</a>
                </li>
                <li>
                  <a href="#">submenu2</a>
                </li>
                <li>
                  <a href="#">submenu3</a>
                </li>
                <li>
                  <a href="#">submenu4</a>
                </li>
                <li>
                  <a href="#">submenu5</a>
                </li>
                <li>
                  <a href="#">submenu6</a>
                </li>
                <li>
                  <a href="#">submenu7</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
