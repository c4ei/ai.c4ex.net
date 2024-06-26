

import Axios from 'axios';
import { ReplaceURLParameters } from './Algorithms';

export const With = (Callback, ...Arguments) => Callback(...Arguments);

export const QuickLocalStorageRescue = (BlockStorageID) => {
    try{
        return JSON.parse(localStorage.getItem(BlockStorageID));
    }catch{
        return {};
    }
};

export class ServerRequestBuilder{
    constructor({ SetError }){
        this.SetError = SetError;
    };

    Register = ({ 
        Callback = undefined, 
        Arguments = undefined, 
        UpdateState = { Setter: undefined, Callback: undefined } 
    }) => new Promise(async (Resolve, Reject) => {
        try{
            const Response = (await Callback(...(Arguments || [])));
            (UpdateState.Callback) && (UpdateState.Setter(UpdateState.Callback(Response?.data || Response)));
            Resolve(Response?.data || Response);
        }catch(Rejection){
            (this.SetError) && 
                (this.SetError(Rejection?.response?.data));
            Reject(Rejection?.response?.data);
        }
        return Response;
    });
};

export const SetDocumentTitle = (Title) => document.title = Title + ' - Pantera';

export class StandardizedAPIRequestBuilder{
    constructor({ Endpoint }){
        this.Endpoint = Endpoint;
        this.SetError = () => {};
    };

    BindErrorSetter = (Setter) => this.SetError = Setter;

    Register = ({
        Path,
        Method = 'GET',
        EnableMassiveLoad = false
    }) => {
        const Buffer = {
            Configuration: {},
            Arguments: [],
            FilterBuffer: '',
            Method: Method.toLowerCase() };
        // ! Is the best option define this function here?
        const AppendParameter = (Identifier, Value) => 
            (Buffer.FilterBuffer +=  ((!Buffer.FilterBuffer) ? (`?`) : ('&')) + `${Identifier}=${Value}`);
        return ({
            Body,
            UpdateState = { Setter: undefined, Callback: undefined },
            QueryParams = [],
            Filter = {
                Fields: undefined,
                Sort: undefined,
                Search: undefined,
                Paginate: undefined
            }
        }) => {
            (QueryParams?.length) && (Path = ReplaceURLParameters(Path, QueryParams));
            (EnableMassiveLoad && !Filter?.Paginate?.Limit) && (Filter.Paginate = { Limit: -1 });
            (Filter?.Sort) && (AppendParameter('Sort', Filter.Sort.join(',')));
            (Filter?.Fields) && (AppendParameter('Fields', Filter.Fields.join(',')));
            (Filter?.Search) && (AppendParameter('Search', Filter.Search));
            (Filter?.Paginate?.Limit) && (AppendParameter('Limit', Filter.Paginate.Limit));
            (Filter?.Paginate?.Page) && (AppendParameter('Page', Filter.Paginate.Page));
            Buffer.Arguments = [
                `${import.meta.env.VITE_SERVER + import.meta.env.VITE_API_SUFFIX + this.Endpoint}${Path}`
                    .concat(Buffer.FilterBuffer) ];
            if(['post', 'put', 'patch'].includes(Buffer.Method))
                Buffer.Arguments.push(Body);
            Buffer.Arguments.push(Buffer.Configuration);
            return new ServerRequestBuilder({ SetError: this.SetError }).Register({
                Callback: Axios[Buffer.Method],
                Arguments: Buffer.Arguments,
                UpdateState
            });
        };
    };
};
