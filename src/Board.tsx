import React from 'react';
import "./App.css"
function Board() {
    let section: any[] = [];
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 || j === 0 || i === 6 || j === 6) {
                section.push(<div className="wall"></div>);
                continue;
            }

            let mod = ((i + j) % 2 === 0);
            if (mod) {
                section.push(<div className="boxA" id={"box_".concat(String(i), String(j))}>
                    <div id={"piece_".concat(String(i), String(j))} className="piece" key={"key_piece_".concat(String(i), String(j))}></div>
                    <div id={"height_".concat(String(i), String(j))} className="height" key={"key_height_".concat(String(i), String(j))}>0</div>
                </div>);
            } else {
                section.push(<div className="boxB" id={"box_".concat(String(i), String(j))}>
                    <div id={"piece_".concat(String(i), String(j))} className="piece" key={"key_piece_".concat(String(i), String(j))}></div>
                    <div id={"height_".concat(String(i), String(j))} className="height" key={"key_height_".concat(String(i), String(j))}>0</div>
                </div>);
            }
        }
    }
    return <div className="game-board">{section}</div>;
}

console.log("I runned");
Board();
export default Board