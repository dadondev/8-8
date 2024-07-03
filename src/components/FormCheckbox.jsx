function FormCheckbox() {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Completed</span>
                <input type="checkbox" defaultChecked={true} name="completed" className="checkbox checkbox-primary" />
            </label>
        </div>
    )
}

export default FormCheckbox