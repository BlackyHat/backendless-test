import React from 'react';

export default function DummyTable({ title }) {
  return (
    <table className="dummyTable">
      <thead>
        <tr>
          <td className="tableTitle">Dummy</td>
          <td className="tableTitle">Table</td>
        </tr>
      </thead>
    </table>
  );
}
