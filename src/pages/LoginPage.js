import React from "react";

class UserLoginPage extends React.Component{

    state = {
        username:null,
        displayName:null,
        password:null,
        passwordRepeat:null,
        pendingApiCall: false,
        errors: {

        }
        
    };



    render() {
        const { pendingApiCall, errors } = this.state;
        const { username, displayName,password,passwordRepeat } = errors;
        const { t } = this.props;
        return (
            <div className="container">
                     <form>
            <h1 className="text-center">{t('Sign Up')}</h1>
            <Input name="username" label={t("Username")} error={username} onChange={this.onChange} />
            <Input name="password" label={t("Password")} error={password} onChange={this.onChange} type="password" />
           
            <div className="text-center mt-3">
            <button 
            className="btn btn-primary" 
            onClick={this.onClickSignUp}
            disabled={pendingApiCall}
            >{ pendingApiCall ? <span className="spinner-border spinner-border-sm"></span> : ''} {t('Sign Up')}
            </button>
            </div>
         
        </form>
            </div>
        );
    }
}
