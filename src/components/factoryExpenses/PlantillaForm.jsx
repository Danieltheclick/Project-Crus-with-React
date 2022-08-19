
const PlantillaForm = ({handleSubitm , handleChange, funcion, todo }) => {
    return (
        
        <>
            <div className="container-fluid">
                <form className="form row mt-3 formulario py-4" id = "myForm" onSubmit={handleSubitm}>
                    <label for="WorkManager" class="form-label col-1"><i class="fas fa-project-diagram"></i> Work Manager: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingresa Nombre del proyecto"
                            name="workManager"
                            value={todo.workManager}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div> 
                    
                    <label for="Description" class="form-label col-1"><i class="fas fa-audio-description"></i> Description: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese la descripción"
                            name="description"
                            value={todo.description}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="AttachmentName" class="form-label col-1"><i class="fas fa-battery-three-quarters"></i>Aattachment Name: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese el estado del proyecto"
                            name="attachmentName"
                            value={todo.attachmentName}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="BillNumber" class="form-label col-1"><i class="fas fa-calendar-check"></i> BillNumber: </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            placeholder="Ingrese la fecha de inicio"
                            name="billNumber"
                            value={todo.billNumber}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <a href="" className="icon-comment"></a>
                    <label for="PurchaseOrder" class="form-label col-1"><i class="fas fa-calendar-check"></i> Purchase Order: </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            placeholder="Ingrese la Fecha de finalización"
                            name="purchaseOrder"
                            value={todo.purchaseOrder}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Provider" class="form-label col-1"><i class="fas fa-calendar-check"></i> Provider: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="provider"
                            value={todo.provider}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="Atlassian"> Atlassian </option>
                            <option value="EMAST"> EMAST </option>
                            <option value="XpertGroup"> XpertGroup </option>
                            <option value="SilverConsulting"> Silver Consulting</option>
                            <option value="AdviserSolutionsSAS"> Adviser Solutions SAS </option>
                            
                        </select>
                    </div>
                    <label for="FacturationPeriod" className="form-label col-1"><i class="fas fa-address-card"></i> Facturation Period </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="facturationPeriod"
                            value={todo.facturationPeriod}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="Year"> Year </option>
                            <option value="Month"> Month </option>
                            <option value="Day"> Day </option>
                            <option value="Users"> Users </option>
                            <option value="Unique"> Unique </option>
                        </select>
                    </div>
                    <label for="InvoiceMonth" className="form-label col-1"><i class="fas fa-address-card"></i> Invoice Month: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="invoiceMonth"
                            value={todo.invoiceMonth}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="January _ 31 days"> January _ 31 days </option>
                            <option value="February _ 28 days in a common year and 29 days in leap years"> February _ 28 days in a common year and 29 days in leap years </option>
                            <option value="March _ 31 days"> March _ 31 days </option>
                            <option value="April _ 30 days"> April _ 30 days </option>
                            <option value="May _ 31 days"> May _ 31 days </option>
                            <option value="June _ 30 days "> June _ 30 days </option>
                            <option value="July _ 31 days"> July _ 31 days </option>
                            <option value="August _ 31 days"> August _ 31 days </option>
                            <option value="September _ 30 days"> September _ 30 days </option>
                            <option value="October _ 31 days "> October _ 31 days </option>
                            <option value="November _ 30 days "> November _ 30 days </option>
                            <option value="UniDecember _ 31 daysque"> December _ 31 days</option>
                        </select>
                    </div>
                    <label for="Society" className="form-label col-1"><i class="fas fa-address-card"></i> Society: </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="society"
                            value={todo.society}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="PREMEX"> PREMEX </option>
                            <option value="ADIQUIM"> ADIQUIM</option>
                            <option value="NUTREO"> NUTREO </option>
                            <option value="ALURA"> ALURA</option>
                            <option value="AKUO"> AKUO </option>
                            <option value="ASIMETRIX"> ASIMETRIX</option>
                        </select>
                    </div>
                    <label for="DateAdmission" class="form-label col-1"><i class="fas fa-arrow-circle-right"></i> Date Admission: </label>
                    <div className="div col-5">
                        <input
                            type="date"
                            name="dateAdmission"
                            value={todo.dateAdmission}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Value" className="form-label col-1"><i class="fas fa-arrow-circle-right"></i> value: </label>
                    <div className="div col-5">
                        <input
                            type="number"
                            placeholder="Ingrese value "
                            name="value"
                            value={todo.value}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="CurrencyType" className="form-label col-1"><i class="fas fa-address-card"></i> currency Type </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="currencyType"
                            value={todo.currencyType}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="USD"> USD </option>
                            <option value="COP"> COP </option>
           
                        </select>
                    </div>
                    <label for="Cecos" className="form-label col-1"><i class="fas fa-percentage"></i>Cecos: </label>
                    <div className="div col-5">
                        <input
                            type="text"
                            placeholder="Ingrese las Notas"
                            name="cecos"
                            value={todo.cecos}
                            className="form-control mb-2"
                            onChange={handleChange}
                            
                        />
                    </div>
                    <label for="Status" className="form-label col-1"><i class="fas fa-address-card"></i> Status </label>
                    <div className="div col-5">
                        <select
                            className="form-control mb-2"
                            name="status"
                            value={todo.status}
                            select defaultValue=""
                            onChange={handleChange}
                            >
                            <option value="Done"> Done </option>
                            <option value="Pending"> Pending </option>
                            <option value="Rejected"> Rejected </option>
           
                        </select>
                    </div>
                    <button className="btn btn-dark col-2 justify-content-center" type="submit" >
                        {funcion}
                    </button>
                    
                </form>
            </div>
            <br></br><hr></hr>
            
        </>
    )
}

export default PlantillaForm
