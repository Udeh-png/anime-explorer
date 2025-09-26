import { DescriptionUi } from "@/components/shared/DescriptionUtil";
import { getCharacterWithId } from "@/queries";
import { getOrdinal } from "@/utils/characterPageUtils";
import Image from "next/image";

export default async function ({
  params,
}: {
  params: Promise<{ id: string; charId: string }>;
}) {
  const [{ charId, id }] = await Promise.all([params]);
  const mediaId = Number(id),
    characterId = Number(charId);
  const { voiceActors, node, role } = await getCharacterWithId(
    mediaId,
    characterId
  );
  const { age, name, image, gender, bloodType, description, dateOfBirth } =
    node;
  const day = dateOfBirth.day,
    month = dateOfBirth.month,
    year = dateOfBirth.year;
  const dayOrdinal = getOrdinal(day);
  const displayMonth = new Date(year, month - 1, day).toLocaleDateString(
    "en-US",
    {
      month: "short",
    }
  );
  const dob = `${dayOrdinal} ${displayMonth}${year ? `, ${year}` : ""}`;

  return (
    <div className="">
      <div className="p-5">
        <div className="flex items-end">
          <div className="w-auto h-auto">
            <Image
              src={image.large}
              alt={`Picture of ${name.full}`}
              width={260}
              height={390}
            />
          </div>

          <div className="w-full min-[600px]:ml-5 ml-2 flex flex-col justify-between">
            <div className="">
              <p className="min-[600px]:text-4xl font-semibold">{name.full}</p>
              <p className="min-[600px]:text-2xl text-sm">{name.native}</p>
              <p className="min-[600px]:text-base text-xs text-accent-two drop-shadow-accent-two w-fit rounded-full">
                {role}
              </p>
            </div>
            <div className="min-[600px]:text-sm min-[600px]:block hidden text-[10px] text-white/80 min-[600px]:mt-2">
              {age && (
                <p>
                  Age: <span className="underline">{age}</span>
                </p>
              )}
              {gender && (
                <p>
                  Gender: <span className="underline">{gender}</span>
                </p>
              )}
              {bloodType && (
                <p>
                  Blood-Type: <span className="underline">{bloodType}</span>{" "}
                </p>
              )}
              {name.alternative.length > 0 && (
                <p>
                  Alternative {name.alternative.length > 1 ? "Names" : "Name"}:{" "}
                  <span className="underline">
                    {name.alternative.map((alt, i) => {
                      if (i > 0) {
                        return `, ${alt}`;
                      }
                      return alt;
                    })}
                  </span>
                </p>
              )}
              {month && day && (
                <p>
                  Date of birth: <span className="underline">{dob}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="min-[600px]:text-sm text-[10px] text-white/80 block min-[600px]:hidden mt-2">
          {age && (
            <p>
              Age: <span className="underline">{age}</span>
            </p>
          )}
          {gender && (
            <p>
              Gender: <span className="underline">{gender}</span>
            </p>
          )}
          {bloodType && (
            <p>
              Blood-Type: <span className="underline">{bloodType}</span>{" "}
            </p>
          )}
          {name.alternative.length > 0 && (
            <p>
              Alternative {name.alternative.length > 1 ? "Names" : "Name"}:{" "}
              <span className="underline">
                {name.alternative.map((alt, i) => {
                  if (i > 0) {
                    return `, ${alt}`;
                  }
                  return alt;
                })}
              </span>
            </p>
          )}
          {month && day && (
            <p>
              Date of birth: <span className="underline">{dob}</span>
            </p>
          )}
        </div>

        <div className="mt-3">
          <p className="text-xl font-semibold">Voice Actors</p>
          <div className="py-2 overflow-auto px-3 w-fit max-w-130 max-h-40 grid grid-cols-2 gap-x-10 gap-y-7 items-start scrollable">
            {voiceActors.map((voiceActor, i) => {
              const { image, name, languageV2 } = voiceActor;
              return (
                <div className="flex gap-x-2 items-center" key={i}>
                  <div className="overflow-clip rounded-[1px]">
                    <Image
                      src={image.large}
                      alt={`picture of ${languageV2} voice actor`}
                      width={40}
                      height={60}
                      className="text-xs"
                    ></Image>
                  </div>
                  <div>
                    <p className="text-[10px] min-[600px]:text-base">
                      {name.full}
                    </p>
                    <p className="text-white/40 text-[10px]">{languageV2}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {name.full.toLowerCase() !== "narrator" && (
          <div className="mt-5">
            <p className="text-xl font-semibold mb-2">Description</p>

            <DescriptionUi description={description} />
          </div>
        )}
      </div>
    </div>
  );
}
