import React from "react";
import "./../components/styles/dashtours.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
function DashTours() {
  return (
    <div className="dashtours">
      <table id="services-table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Destination</th>
            <th>Amount</th>
            <th>People</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hiking</td>
            <td>$100</td>
            <td>10</td>
            <td>
              <FaEdit className="lIcons" />{" "}
              <RiDeleteBin5Fill className="lIcons delicon" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Amashyuza</td>
            <td>$289</td>
            <td>6</td>
            <td>
              <FaEdit className="lIcons" />{" "}
              <RiDeleteBin5Fill className="lIcons delicon" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Amateka</td>
            <td>$1800</td>
            <td>8</td>
            <td>
              <FaEdit className="lIcons" />{" "}
              <RiDeleteBin5Fill className="lIcons delicon" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ingagi</td>
            <td>$29</td>
            <td>10</td>
            <td>
              <FaEdit className="lIcons" />{" "}
              <RiDeleteBin5Fill className="lIcons delicon" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Kivu</td>
            <td>$78</td>
            <td>12</td>
            <td>
              <FaEdit className="lIcons" />{" "}
              <RiDeleteBin5Fill className="lIcons delicon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DashTours;
