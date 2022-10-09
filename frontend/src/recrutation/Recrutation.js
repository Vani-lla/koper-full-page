import React from 'react'
import './Recrutation.css'

export default function Recrutation() {
    return (
        <div className='recrutation tile'>
            <table>
                <thead>
                    <tr>
                        <th>Rozszerzenie</th>
                        <th>Przedmioty rozszerzone</th>
                        <th>Przedmioty punktowane</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Dyplomatyczne</td>
                        <td>
                            <ul>
                                <li>Wiedza o Społeczeństwie</li>
                                <li>Wiedza o Kulturze</li>
                                <li>Elementy nauk społecznych</li>
                                <li>Warsztaty dziennikarskie</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Język Polski</li>
                                <li>Matematyka</li>
                                <li>Język Angielski</li>
                                <li>Geografia</li>
                                <li>Wiedza o Społoczeństwie</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Językowo-Turystyczne</td>
                        <td>
                            <ul>
                                <li>Język Angielski</li>
                                <li>Geografia</li>
                                <li>Język Francuski</li>
                                <li>Język Niemiecki</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Język Polski</li>
                                <li>Matematyka</li>
                                <li>Język Angielski</li>
                                <li>Drugi język obcy</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Spoleczno-Prawne</td>
                        <td>
                            <ul>
                                <li>Język Polski</li>
                                <li>Historia</li>
                                <li>Wiedza o Społoczeństwie</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Język Polski</li>
                                <li>Matematyka</li>
                                <li>Historia</li>
                                <li>Wiedza o Społoczeństwie</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Politechniczne</td>
                        <td>
                            <ul>
                                <li>Matematyka</li>
                                <li>Fizyka</li>
                                <li>Informatyka</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Język Polski</li>
                                <li>Matematyka</li>
                                <li>Fizyka</li>
                                <li>Informatyka</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Biologiczno-Chemiczne</td>
                        <td>
                            <ul>
                                <li>Biologia</li>
                                <li>Chemia</li>
                                <li>Matematyka</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Język Polski</li>
                                <li>Matematyka</li>
                                <li>Biologia</li>
                                <li>Chemia</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>Ekonomiczno-Menadżerskie</td>
                        <td>
                            <ul>
                                <li>Język Angielski</li>
                                <li>Geografia</li>
                                <li>Matematyka</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Język Polski</li>
                                <li>Matematyka</li>
                                <li>Język Angielski</li>
                                <li>Geografia</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
