import { RendezVousAPI, VisiteAPI } from '@/isadom-models';
import { CardTournee, Cta, Infos, Time, TypesVisites } from './style';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Icon } from '@/styles/atoms/Icon';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ButtonPrimary, ButtonGhost } from '@/styles/atoms/Buttons';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
interface Props {
  rdvOuVisite: VisiteAPI | RendezVousAPI;
}

const TourneeItem = ({ rdvOuVisite }: Props) => {
  rdvOuVisite.tTypeVisite.length > 1 && console.log(rdvOuVisite.tTypeVisite);
  return (
    <CardTournee>
      <div className="col col-left">
        <Time className="time">{rdvOuVisite.hDebut.slice(0, -7)}</Time>

        <Infos className="infos">
          <div className="info-item nom highlight">
            <Icon>
              <EmojiEmotionsIcon />
            </Icon>
            <p>
              {rdvOuVisite.tiersVisite.sNom} {rdvOuVisite.tiersVisite.sPrenom}
            </p>
          </div>
          <div className="info-item location">
            <div>
              <Icon>
                <LocationOnIcon />
              </Icon>
            </div>
            <p>
              {rdvOuVisite.tiersVisite.adressePrincipale.sAdresseSansCPVille}
              <br />
              {rdvOuVisite.tiersVisite.adressePrincipale.sVille}
              {` `}
              {rdvOuVisite.tiersVisite.adressePrincipale.sCodePostal}
            </p>
          </div>
          <div className="info-item telephone">
            <div>
              <Icon>
                <LocalPhoneIcon />
              </Icon>
            </div>
            <p>{rdvOuVisite.tiersVisite.adressePrincipale.sTelFixe}</p>
          </div>
        </Infos>
      </div>

      <div className="col col-right">
        <TypesVisites className="types-visites">
          {rdvOuVisite.tTypeVisite?.map((typeVisite) => (
            <div
              key={`${typeVisite.sPKTypeVisite} ${rdvOuVisite.tiersVisite.sNom}`}
              className="type-visite"
            >
              <p className="type-visite__libelle">{typeVisite.sLibelle}</p>

              {typeVisite.tTypePrestation?.length > 0 && (
                <div className="prestations">
                  {typeVisite.tTypePrestation?.map((typePrestation) => (
                    <span
                      className="prestation"
                      key={typePrestation.sPKTypePrestation}
                    >
                      {typePrestation.sLibelle}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </TypesVisites>

        <Cta className="cta">
          <ButtonGhost type="button">
            <EditIcon />
            Modifier
          </ButtonGhost>

          <ButtonPrimary type="button">
            <PersonSearchIcon />
            <Link href={`/visites/${rdvOuVisite.ID}/appareil-configuration`}>
              Configuration appareil
            </Link>
          </ButtonPrimary>
        </Cta>
      </div>
    </CardTournee>
  );
};

export default TourneeItem;
