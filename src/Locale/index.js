

import EN from './EN.json';
import KO from './KO.json';
import ES from './ES.json';
import DE from './DE.json';
import PR from './PR.json';
import TR from './TR.json';
import RU from './RU.json';
import CH from './CH.json';
import AR from './AR.json';
import FR from './FR.json';
import IT from './IT.json';

const Locales = {
    AR,
    KO,
    CH,
    DE,
    EN,
    ES,
    FR,
    IT,
    PR,
    RU,
    TR
};

export const GetAvailableLocales = Object.keys(Locales);

export default Locales;