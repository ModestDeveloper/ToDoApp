import React from "react"

function MainContent() {
    return (
        <main>
            <strong className="subtopic"><p>List of subject you have to complete</p></strong>
            <div className="checkbox">
                <input type="checkbox" name="subject1" value="1"/>Systems Programming<br/>
                <input type="checkbox" name="subject1" value="2"/>Operating System<br/>
                <input type="checkbox" name="subject1" value="3"/>Bash Programming<br/>
                <input type="checkbox" name="subject1" value="4"/>Computer Graphics<br/>
                <input type="checkbox" name="subject1" value="5"/>Digital Communication<br/>
                <input type="checkbox" name="subject1" value="6"/>Computer Graphics<br/>
            </div>
        </main>
    )
}

export default MainContent