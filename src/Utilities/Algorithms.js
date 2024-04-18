

export const MergeObjectValues = (To, From) => {
    for(const Value in From){
        if(typeof To[Value] != 'object')
            To[Value] = From[Value];
        else if(typeof From[Value] === 'object')
            To[Value] = MergeObjectValues(To[Value], From[Value]);
    }
    return To;
};

export const ReplaceURLParameters = (URL, Parameters = []) => (
    URL.split(':').map((Value) => (Value.startsWith('/') && Value.endsWith('/')) ? (Value) : (Parameters.shift()))
).join('');

export const FormatChatResponseListDate = (ToFormatDate) => new Date(Date.UTC(...ToFormatDate.split('-'))
    ).toLocaleString(navigator.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });