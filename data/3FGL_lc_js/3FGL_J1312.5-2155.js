Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.99897599,  3.62050271,  3.47855425,  4.0346179 ,  3.76523209,        3.41085696,  3.06833434,  0.72950912,  2.90354061,  2.3390615 ,        3.63908553,  0.8503924 ,  0.2286889 ,  2.8897593 ,  3.62628007,        1.79577816,  0.92215419,  1.61277521,  4.02821302,  2.60678816,        1.84713173,  1.15780771,  0.14499445,  0.84759206,  1.5249747 ,        1.17233729,  4.2769866 ,  1.51476598,  2.58262539,  1.30855763,        1.80239165,  2.11431074,  0.82473922,  0.90319759,  2.14889097,        1.29257464,  0.        ,  2.97467017,  0.99214613,  4.09196711,        0.74166656,  1.3318857 ,  2.75300169,  1.14213824,  2.0548563 ,        3.21710801,  0.98211437,  3.34569216]
FluxHistoryError = [[ 1.91828346,  4.16941929],       [ 2.43200445,  4.91701412],       [ 2.4119184 ,  4.67794323],       [ 2.94912028,  5.18375969],       [ 2.74867177,  4.92182922],       [ 2.302104  ,  4.68998671],       [ 2.12285686,  4.14705849],       [ 0.        ,  2.88067913],       [ 1.96194935,  3.96894073],       [ 1.36044371,  3.42888808],       [ 2.59048414,  4.81027603],       [ 0.24051321,  1.54347563],       [ 0.        ,  2.92791981],       [ 1.97455466,  3.87894917],       [ 2.17049742,  5.31476641],       [ 0.92939383,  2.82745934],       [ 0.14573854,  1.96940958],       [ 0.81373173,  2.62560225],       [ 2.95461369,  5.21902704],       [ 1.56337214,  3.87342215],       [ 1.1044929 ,  2.72498298],       [ 0.40074652,  2.12649393],       [ 0.        ,  1.98790641],       [ 0.        ,  2.95941442],       [ 0.71162915,  2.55872679],       [ 0.43378127,  2.12110996],       [ 2.5392642 ,  6.28191996],       [ 0.69236833,  2.49322629],       [ 1.55605948,  3.80417347],       [ 0.62855166,  2.17805862],       [ 0.98654258,  2.8204062 ],       [ 1.02873266,  3.35659981],       [ 0.1875478 ,  1.76514673],       [ 0.21277404,  1.93188906],       [ 1.29858518,  3.13385916],       [ 0.51129061,  2.42400813],       [ 0.        ,  1.95116079],       [ 1.86237621,  4.24757481],       [ 0.34951794,  1.92522764],       [ 3.04738235,  5.23968887],       [ 0.1098274 ,  1.66473174],       [ 0.61719173,  2.23621631],       [ 1.64356005,  4.03857851],       [ 0.21973848,  2.28599787],       [ 1.04386532,  3.30266047],       [ 1.99387896,  4.66776705],       [ 0.36669725,  1.76080346],       [ 2.03169346,  4.92437363]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.15002762e+02],       [  5.47000000e+02,   4.21591835e+01],       [  1.73200000e+03,   1.54805202e+01],       [  5.47700000e+03,   4.45918369e+00],       [  3.16220000e+04,   7.08202422e-01]]
SpectrumError = [[  1.73000000e+02,   6.88705750e+01,   1.62094391e+02],       [  5.47000000e+02,   3.59996948e+01,   4.85474472e+01],       [  1.73200000e+03,   1.38476028e+01,   1.71813507e+01],       [  5.47700000e+03,   3.82172775e+00,   5.16372585e+00],       [  3.16220000e+04,   4.81470585e-01,   9.87235546e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]