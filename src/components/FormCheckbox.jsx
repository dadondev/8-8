function FormCheckbox() {
    return (
        <div className="form-control">
            <label className="label cursor-pointer flex items-center gap-2">
                <span className="label-text text-xl font-semibold text-blue-800">Completed</span>
                <input type="checkbox" defaultChecked={true} name="completed" className="checkbox checkbox-primary" />
            </label>
        </div>
    )
}

export default FormCheckbox